import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  serveHome(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('clients')
  serveClients(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'clients.html'));
  }

  @Get('about')
  serveAbout(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'about.html'));
  }
}
