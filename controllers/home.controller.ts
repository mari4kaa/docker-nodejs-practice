import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { MessageService } from 'services/message.service';

@Controller()
export class HomeController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const htmlPath = path.resolve(__dirname, '../../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    const message = this.messageService.getMessage();
    const decoratedHtml = html.replace('{{message}}', message);
    res.send(decoratedHtml);
  }
}
