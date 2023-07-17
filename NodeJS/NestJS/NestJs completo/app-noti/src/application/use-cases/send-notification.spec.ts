import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);
    const response = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Voce recebeu uma notificação',
      category: 'social',
    });

    expect(response.notification).toBeTruthy();
  });
});
