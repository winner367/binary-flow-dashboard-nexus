
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RiskManagement() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Risk Management</h1>
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Maximum Risk per Trade (%)</label>
            <Input type="number" placeholder="2%" />
          </div>
          <div>
            <label className="text-sm font-medium">Daily Loss Limit ($)</label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <Button>Update Risk Settings</Button>
        </div>
      </Card>
    </div>
  );
}
