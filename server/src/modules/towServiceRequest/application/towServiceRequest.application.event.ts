export namespace TowServiceRequestApplicationEvent {
  export namespace TowServiceRequestCreated {
    export const key = 'towServiceRequest.application.towServiceRequest.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
