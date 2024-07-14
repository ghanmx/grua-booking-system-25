export namespace NotificationPreferenceApplicationEvent {
  export namespace NotificationPreferenceCreated {
    export const key =
      'notificationPreference.application.notificationPreference.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
