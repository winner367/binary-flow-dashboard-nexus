
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StrategyConfiguration() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Strategy Configuration</h1>
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Strategy Name</label>
            <Input placeholder="Enter strategy name" />
          </div>
          <div>
            <label className="text-sm font-medium">Time Frame</label>
            <Input placeholder="e.g., 5m, 15m, 1h" />
          </div>
          <Button>Save Strategy</Button>
        </div>
      </Card>
    </div>
  );
}
