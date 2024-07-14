export namespace UserFormApplicationEvent {
  export namespace UserFormCreated {
    export const key = 'userForm.application.userForm.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
