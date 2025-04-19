
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BotSettings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bot Settings</h1>
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Bot Name</label>
            <Input placeholder="Enter bot name" />
          </div>
          <div>
            <label className="text-sm font-medium">Trading Pair</label>
            <Input placeholder="e.g., EUR/USD" />
          </div>
          <Button>Save Bot Settings</Button>
        </div>
      </Card>
    </div>
  );
}
