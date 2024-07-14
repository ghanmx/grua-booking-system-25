export namespace PasswordHistoryApplicationEvent {
  export namespace PasswordHistoryCreated {
    export const key = 'passwordHistory.application.passwordHistory.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
