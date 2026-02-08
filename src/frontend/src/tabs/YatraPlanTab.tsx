import { useState } from 'react';
import { Card as UICard, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { itineraries } from '../data/dwarkaGuide';
import { getGoogleMapsUrl } from '../utils/googleMaps';
import { Card } from '../components/recommendation/Card';
import { Badge } from '../components/recommendation/Badge';

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
          <UICard key={dayPlan.day} className="border-2 border-saffron/20 shadow-md">
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
                          {item.showMap !== false && (
                            <a
                              href={getGoogleMapsUrl(item.mapQuery || item.place)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-ocean hover:text-saffron bg-ocean/10 hover:bg-saffron/10 rounded-md transition-colors border border-ocean/20 hover:border-saffron/20"
                            >
                              📍 Map
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground ml-7 whitespace-pre-line">{item.description}</p>
                        )}
                        
                        {item.stops && item.stops.length > 0 && (
                          <div className="mt-3 ml-7 space-y-3 border-l-2 border-saffron/30 pl-4">
                            {item.stops.map((stop, stopIndex) => (
                              <div key={stopIndex} className="space-y-1">
                                <div className="flex items-start gap-2 flex-wrap">
                                  <h5 className="font-medium text-base flex-1">{stop.place}</h5>
                                  <a
                                    href={getGoogleMapsUrl(stop.mapQuery || stop.place)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-ocean hover:text-saffron bg-ocean/10 hover:bg-saffron/10 rounded-md transition-colors border border-ocean/20 hover:border-saffron/20"
                                  >
                                    📍 Map
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                </div>
                                <p className="text-sm text-muted-foreground">{stop.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {item.recommendationCard && (
                          <div className="mt-4 ml-7">
                            <Card
                              title={item.recommendationCard.shopName}
                              subtitle={`📍 ${item.recommendationCard.location}`}
                              description={item.recommendationCard.details}
                            >
                              <Badge
                                color="orange"
                                position="top-right"
                                icon="camera"
                              >
                                Recommended
                              </Badge>
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                    {index < dayPlan.items.length - 1 && <Separator className="my-2 opacity-30" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </UICard>
        ))}
      </div>
    </div>
  );
}
