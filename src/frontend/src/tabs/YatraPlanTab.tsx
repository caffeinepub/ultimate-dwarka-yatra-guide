import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, ExternalLink, Camera } from 'lucide-react';
import { itineraries } from '../data/dwarkaGuide';
import { getGoogleMapsUrl } from '../utils/googleMaps';

export default function YatraPlanTab() {
  const [selectedDays, setSelectedDays] = useState<1 | 2 | 3>(1);

  const dayPlans = itineraries[selectedDays];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-saffron">अपनी यात्रा की योजना बनाएं</h2>
        <p className="text-muted-foreground">अपनी तीर्थयात्रा के लिए दिनों की संख्या चुनें</p>
      </div>

      <div className="flex justify-center gap-3">
        {[1, 2, 3].map((days) => (
          <Button
            key={days}
            onClick={() => setSelectedDays(days as 1 | 2 | 3)}
            variant={selectedDays === days ? 'default' : 'outline'}
            size="lg"
            className={selectedDays === days ? 'bg-saffron hover:bg-saffron/90 text-white shadow-lg' : ''}
          >
            {days} दिन
          </Button>
        ))}
      </div>

      <div className="space-y-6">
        {dayPlans.map((dayPlan) => (
          <Card key={dayPlan.day} className="border-2 border-saffron/20 shadow-md">
            <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
              <CardTitle className="text-xl text-saffron">दिन {dayPlan.day}</CardTitle>
              <CardDescription className="text-base font-medium">{dayPlan.title}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {dayPlan.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-saffron to-ocean flex items-center justify-center text-white font-bold shadow-md">
                          {index + 1}
                        </div>
                        {index < dayPlan.items.length - 1 && (
                          <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-saffron to-ocean/30 my-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        {item.time && (
                          <div className="flex items-center gap-2 text-sm text-ocean font-medium mb-1">
                            <Clock className="h-4 w-4" />
                            <span>{item.time}</span>
                          </div>
                        )}
                        <div className="flex items-start gap-2 mb-1 flex-wrap">
                          <MapPin className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                          <h4 className="font-semibold text-lg flex-1">{item.place}</h4>
                          <a
                            href={getGoogleMapsUrl(item.place)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-ocean hover:text-saffron bg-ocean/10 hover:bg-saffron/10 rounded-md transition-colors border border-ocean/20 hover:border-saffron/20"
                          >
                            📍 Map
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground ml-7">{item.description}</p>
                        )}
                        
                        {item.recommendationCard && (
                          <Card className="mt-4 ml-7 border-2 border-saffron bg-gradient-to-br from-saffron/5 to-ocean/5 shadow-lg">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base flex items-center gap-2 text-saffron">
                                <Camera className="h-5 w-5" />
                                {item.recommendationCard.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
                                <img
                                  src={item.recommendationCard.placeholderImage}
                                  alt={item.recommendationCard.shopName}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="space-y-2">
                                <div>
                                  <p className="text-sm font-semibold text-foreground">
                                    {item.recommendationCard.shopName}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    📍 {item.recommendationCard.location}
                                  </p>
                                </div>
                                <p className="text-sm text-foreground leading-relaxed">
                                  {item.recommendationCard.details}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                    {index < dayPlan.items.length - 1 && <Separator className="my-2 opacity-30" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
