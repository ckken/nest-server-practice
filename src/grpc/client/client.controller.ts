import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { Observable, ReplaySubject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { grpcClientOptions } from '../proto/hero.option';
import { Hero, HeroById, HeroService } from '../type';

@Controller()
export class ClientController implements OnModuleInit {
  //
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroService;
  //
  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get()
  getMany(): Observable<Hero[]> {
    const ids$ = new ReplaySubject<HeroById>();
    ids$.next({ id: 1 });
    ids$.next({ id: 2 });
    ids$.complete();

    const stream = this.heroService.findMany(ids$.asObservable());
    return stream.pipe(toArray());
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<Hero> {
    return this.heroService.findOne({ id: +id });
  }
}
