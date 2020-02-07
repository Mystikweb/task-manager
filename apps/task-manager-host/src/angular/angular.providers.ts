import { Provider } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AbstractLoader } from './loaders/abstract.loader';
import { ExpressLoader } from './loaders/express.loader';
import { NoopLoader } from './loaders/noop.loader';

export const angularProviders: Provider[] = [
  {
    provide: AbstractLoader,
    useFactory: (httpAdapterHost: HttpAdapterHost) => {
      if (!httpAdapterHost) {
        return new NoopLoader();
      }

      return new ExpressLoader();
    },
    inject: [HttpAdapterHost],
  },
];
