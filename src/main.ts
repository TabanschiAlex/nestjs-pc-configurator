import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

const run = async(): Promise<void> => {
  try {
    const port = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    await app.listen(port, () => console.log(`Server running at PORT: ${port}`));
  } catch (e) {
    console.log('Server running error: ' + e.message);
  }
}

run();
