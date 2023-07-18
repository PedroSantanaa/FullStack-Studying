import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract fingById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
