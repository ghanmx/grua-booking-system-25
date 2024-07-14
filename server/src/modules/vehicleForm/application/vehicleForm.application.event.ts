export namespace VehicleFormApplicationEvent {
  export namespace VehicleFormCreated {
    export const key = 'vehicleForm.application.vehicleForm.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
