import { Inject, Injectable } from '@nestjs/common';
import { Character, Characters } from './character.type';
import { Adapter } from 'src/adapter/adapter';

@Injectable()
export class CharacterService {
  constructor(
    @Inject('ADAPTER') private readonly adapter: Adapter,
  ) {}
  async character(id: number): Promise<Character> {
    return this.adapter.character(id);
  }
  async characters(page: number): Promise<Characters> {
    return this.adapter.characters(page);
  }
}
