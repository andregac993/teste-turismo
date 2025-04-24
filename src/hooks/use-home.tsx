'use client'
import {useEffect, useState} from "react";
import {HotelInfo} from "@/@types/general-types";
import {hotelData} from "@/service/service";

export function UseHome(){
        const [hotelList, setHotelList] = useState<HotelInfo[]>(hotelData);

        useEffect(() => {
            //para o caso de uma atualização de novos dados
            const fetchData: HotelInfo[] = []
            setHotelList(fetchData);
        },[hotelList])

        return{
            hotelList,
            }
    }
