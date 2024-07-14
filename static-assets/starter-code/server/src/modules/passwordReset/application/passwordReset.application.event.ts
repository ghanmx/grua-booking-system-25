export namespace PasswordResetApplicationEvent {
  export namespace PasswordResetCreated {
    export const key = 'passwordReset.application.passwordReset.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
