import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  ClientProxy,
  MessagePattern,
  EventPattern,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class MathController {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  execute(@Query() query): Observable<number> {
    const pattern = { cmd: 'sum' };
    const data = [1, 2, 3, 4, 5, 6];
    if (query.num) {
      const num = parseInt(query.num);
      data.push(num);
    }
    this.client.emit<number>('user_created', {
      a: 'abc',
    });
    // console.log('call back', cb);
    return this.client.send<number>(pattern, data);
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
  // 异步消息 不需要等待 res
  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log('from user_created', data);
    return data;
  }
}
