import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Hotel, Crown, Utensils } from 'lucide-react';
import { stayFoodData } from '../data/dwarkaGuide';

export default function StayFoodTab() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-saffron">होटल और भोजन</h2>
        <p className="text-muted-foreground">आवास और भोजन के विकल्प</p>
      </div>

      <Card className="border-2 border-saffron/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-saffron" />
            <CardTitle className="text-xl">धर्मशाला (बजट)</CardTitle>
          </div>
          <CardDescription>किफायती आवास विकल्प</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {stayFoodData.dharamshala.options.map((option, index) => (
              <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="h-2 w-2 rounded-full bg-saffron" />
                <span className="font-medium">{option.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-2 border-ocean/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-ocean/10 to-saffron/10">
          <div className="flex items-center gap-2">
            <Hotel className="h-6 w-6 text-ocean" />
            <CardTitle className="text-xl">मिड-रेंज होटल</CardTitle>
          </div>
          <CardDescription>आरामदायक आवास विकल्प</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {stayFoodData.midRange.map((option, index) => (
              <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="h-2 w-2 rounded-full bg-ocean" />
                <span className="font-medium">{option.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-2 border-saffron/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-saffron" />
            <CardTitle className="text-xl">लग्ज़री होटल</CardTitle>
          </div>
          <CardDescription>प्रीमियम आवास विकल्प</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {stayFoodData.luxury.map((option, index) => (
              <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="h-2 w-2 rounded-full bg-saffron" />
                <span className="font-medium">{option.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-2 border-ocean/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-ocean/10 to-saffron/10">
          <div className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-ocean" />
            <CardTitle className="text-xl">भोजन (सर्वश्रेष्ठ स्थान)</CardTitle>
          </div>
          <CardDescription>स्वादिष्ट भोजन के लिए</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {stayFoodData.bestFood.map((option, index) => (
              <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="h-2 w-2 rounded-full bg-ocean" />
                <span className="font-medium">{option.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
