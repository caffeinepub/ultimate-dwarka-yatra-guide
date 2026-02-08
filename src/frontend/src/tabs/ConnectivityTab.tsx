import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Train, Bus, Car, MessageCircle } from 'lucide-react';
import { connectivityData } from '../data/dwarkaGuide';
import { getWhatsAppUrl } from '../config/monetization';

export default function ConnectivityTab() {
  const handleWhatsAppClick = () => {
    const message = 'Hi! I want to book a car/bike rental for my Dwarka trip.';
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-saffron">अहमदाबाद से द्वारका</h2>
        <p className="text-muted-foreground">आपकी यात्रा के लिए परिवहन विकल्प</p>
      </div>

      {/* Premium Monetization Card - Rent a Car/Bike */}
      <Card className="border-4 shadow-2xl relative overflow-hidden" style={{ borderColor: '#D4AF37' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/50 pointer-events-none" />
        <CardHeader className="relative" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%)' }}>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-2xl" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)' }}>
              🚗
            </div>
            <CardTitle className="text-xl font-bold" style={{ color: '#B8860B' }}>Rent a Car/Bike</CardTitle>
          </div>
          <CardDescription className="text-base font-medium mt-2" style={{ color: '#8B7355' }}>
            For Best Rates & Trusted Service - Contact Desi Musafir
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 relative">
          <div className="space-y-4">
            <div className="flex flex-col gap-3 p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(255, 215, 0, 0.05) 100%)' }}>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#8B7355' }}>
                ✓ Verified & Well-Maintained Vehicles
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#8B7355' }}>
                ✓ Flexible Rental Options (Daily/Weekly)
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#8B7355' }}>
                ✓ Local Expert Guidance Included
              </div>
            </div>
            
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full font-bold text-base shadow-lg hover:shadow-xl transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                color: '#1a1a1a'
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Now (WhatsApp)
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-saffron/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
          <div className="flex items-center gap-2">
            <Train className="h-6 w-6 text-saffron" />
            <CardTitle className="text-xl">ट्रेनें</CardTitle>
          </div>
          <CardDescription>आरामदायक रेल यात्रा विकल्प</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ट्रेन का नाम</TableHead>
                <TableHead className="font-semibold">समय</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connectivityData.trains.map((train, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{train.name}</TableCell>
                  <TableCell className="text-ocean">{train.timing || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-2 border-ocean/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-ocean/10 to-saffron/10">
          <div className="flex items-center gap-2">
            <Bus className="h-6 w-6 text-ocean" />
            <CardTitle className="text-xl">लग्जरी बसें</CardTitle>
          </div>
          <CardDescription>प्रीमियम बस सेवाएं</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">ऑपरेटर</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connectivityData.luxuryBuses.map((bus, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{bus.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-2 border-saffron/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-saffron/10 to-ocean/10">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-saffron" />
            <CardTitle className="text-xl">स्थानीय परिवहन</CardTitle>
          </div>
          <CardDescription>द्वारका में घूमने के लिए</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {connectivityData.localTransport.map((transport, index) => (
              <div key={index} className="flex flex-col gap-1 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="font-semibold text-base">{transport.name}</div>
                {transport.description && (
                  <div className="text-sm text-muted-foreground">{transport.description}</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
