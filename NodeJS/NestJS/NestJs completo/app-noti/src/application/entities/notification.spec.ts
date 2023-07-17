import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Voce recebeu uma notificação'),
      category: 'social',
      recipientId: 'example-recipent-id',
    });

    expect(notification).toBeTruthy();
  });
});
