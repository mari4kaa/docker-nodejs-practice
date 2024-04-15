import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessage(): string {
    return 'Made by Mariia Kryvokhata!';
  }
}
