import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TowServiceRequestCreateDto {
  @IsString()
  @IsNotEmpty()
  startLocation: string

  @IsString()
  @IsNotEmpty()
  endLocation: string

  @IsString()
  @IsNotEmpty()
  vehicleType: string

  @IsString()
  @IsOptional()
  breakdownDetails?: string

  @IsNumber()
  @IsNotEmpty()
  distance: number

  @IsNumber()
  @IsNotEmpty()
  baseFare: number

  @IsNumber()
  @IsNotEmpty()
  costPerKm: number

  @IsNumber()
  @IsNotEmpty()
  tollCharges: number

  @IsNumber()
  @IsNotEmpty()
  totalCost: number

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsNumber()
  @IsOptional()
  rating?: number

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean

  @IsString()
  @IsOptional()
  cancellationReason?: string

  @IsString()
  @IsOptional()
  paymentStatus?: string

  @IsString()
  @IsOptional()
  paymentMethod?: string

  @IsString()
  @IsOptional()
  distanceUnit?: string

  @IsString()
  @IsOptional()
  startTime?: string

  @IsString()
  @IsOptional()
  endTime?: string

  @IsString()
  @IsOptional()
  locationHistory?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  towTruckTypeId?: string
}

export class TowServiceRequestUpdateDto {
  @IsString()
  @IsOptional()
  startLocation?: string

  @IsString()
  @IsOptional()
  endLocation?: string

  @IsString()
  @IsOptional()
  vehicleType?: string

  @IsString()
  @IsOptional()
  breakdownDetails?: string

  @IsNumber()
  @IsOptional()
  distance?: number

  @IsNumber()
  @IsOptional()
  baseFare?: number

  @IsNumber()
  @IsOptional()
  costPerKm?: number

  @IsNumber()
  @IsOptional()
  tollCharges?: number

  @IsNumber()
  @IsOptional()
  totalCost?: number

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsNumber()
  @IsOptional()
  rating?: number

  @IsBoolean()
  @IsOptional()
  completed?: boolean

  @IsString()
  @IsOptional()
  cancellationReason?: string

  @IsString()
  @IsOptional()
  paymentStatus?: string

  @IsString()
  @IsOptional()
  paymentMethod?: string

  @IsString()
  @IsOptional()
  distanceUnit?: string

  @IsString()
  @IsOptional()
  startTime?: string

  @IsString()
  @IsOptional()
  endTime?: string

  @IsString()
  @IsOptional()
  locationHistory?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  towTruckTypeId?: string
}
