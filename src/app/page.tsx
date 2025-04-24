import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import { Star } from 'lucide-react';
import {UseHome} from "@/hooks/use-home";

export default function Home() {
    const {hotelList} = UseHome()
  return (
    <div className=" items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-['100%'] ">
            {
                hotelList.map((hotel) => (
                    <Card className="w-[350px]" key={hotel.id}>
                        <CardHeader>
                            <CardTitle>{hotel.name}</CardTitle>
                            <div className={'flex items-center '}>
                                <CardDescription>{hotel.address}</CardDescription>
                                <CardDescription>
                                    {
                                        [...Array(5).map((_, index) => (
                                            <Star
                                                key={index}
                                                size={16}
                                                className={'bg-blend-color'}
                                                color={'#ffcc00'}

                                            />

                                        ))]
                                    }
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Image
                                width={700}
                                height={600}
                                className={'w-[100%]'}
                                src={hotel.image ?? 'https://img.freepik.com/fotos-gratis/full-shot-homem-carregando-bagagem_23-2149963942.jpg?semt=ais_hybrid&w=740'}
                                alt={''}>
                            </Image>
                        </CardContent>
                    </Card>
                ))
            }
    </div>
  );
}
