import { auth } from "@/lib/auth";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Command {
  id: string;
  title: string;
  content: string;
}

const DashboardServer = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/signin');
  }

  const response = await axios.get('http://localhost:3000/api/create');
  const commands: Command[] = response.data.body;

  return (
    <div className="p-6 min-h-screen">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {commands.map((command) => (
          <CommandCard key={command.id} command={command} />
        ))}
      </div>
    </div>
  );
};

const CommandCard = ({ command }: { command: Command }) => (
  <div className="transform transition-transform hover:scale-105">
    <Link href={`/dashboard/${command.id}`} className="block" aria-label={`View command: ${command.title}`}>
      <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg flex items-center justify-between">
        <h3 className="text-lg font-semibold">{command.title}</h3>
        <MoveRight />
      </div>
    </Link>
  </div>
);

export default DashboardServer;