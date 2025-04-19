
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trading Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">Active Bots</h2>
          <p className="text-3xl font-bold">3</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">Today's Trades</h2>
          <p className="text-3xl font-bold">24</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">Win Rate</h2>
          <p className="text-3xl font-bold text-green-500">68%</p>
        </Card>
      </div>
    </div>
  );
}
