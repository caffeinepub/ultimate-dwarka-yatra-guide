import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock, AlertTriangle } from 'lucide-react';
import { rulesData } from '../data/dwarkaGuide';

export default function RulesTimingsTab() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-saffron">नियम और समय</h2>
        <p className="text-muted-foreground">आपकी यात्रा के लिए महत्वपूर्ण जानकारी</p>
      </div>

      <Alert variant="destructive" className="border-2 border-destructive shadow-lg">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="text-lg font-bold">🔴 सख्त मना है (Strictly Prohibited)</AlertTitle>
        <AlertDescription className="space-y-3 mt-3">
          <p className="text-base font-medium">
            {rulesData.criticalNotice}
          </p>
          <ul className="space-y-2 mt-3">
            {rulesData.prohibitedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-destructive font-bold mt-0.5">•</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-saffron">मंदिर का समय</h3>
        {rulesData.templeTimings.map((temple, index) => (
          <Card key={index} className="border-2 border-saffron/20 shadow-md">
            <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-saffron" />
                <CardTitle className="text-xl">{temple.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                <div className="h-2 w-2 rounded-full bg-ocean mt-2 flex-shrink-0" />
                <p className="text-lg font-medium text-ocean">{temple.timings}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-ocean/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-ocean/10 to-saffron/10">
          <CardTitle className="text-xl">सामान्य दिशानिर्देश</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="h-2 w-2 rounded-full bg-saffron mt-2 flex-shrink-0" />
              <span>विनम्र और सम्मानजनक पोशाक पहनें</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="h-2 w-2 rounded-full bg-saffron mt-2 flex-shrink-0" />
              <span>मंदिर परिसर में प्रवेश करने से पहले जूते उतारें</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="h-2 w-2 rounded-full bg-saffron mt-2 flex-shrink-0" />
              <span>कुछ क्षेत्रों में फोटोग्राफी प्रतिबंधित हो सकती है</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="h-2 w-2 rounded-full bg-saffron mt-2 flex-shrink-0" />
              <span>शांति और शांतिपूर्ण वातावरण बनाए रखें</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="h-2 w-2 rounded-full bg-saffron mt-2 flex-shrink-0" />
              <span>व्यस्त समय के दौरान कतार प्रणाली का पालन करें</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
