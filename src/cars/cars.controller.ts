import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    geAllCars() {
        return ["Toyota","Honda","Jeep"];
        }
    }
