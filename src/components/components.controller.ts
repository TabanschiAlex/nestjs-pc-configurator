import {Controller, Get, Param} from '@nestjs/common';
import {ComponentsService} from "./components.service";

@Controller('components')
export class ComponentsController {
  constructor(private componentsService: ComponentsService) {
  }

  @Get('/:component')
  getComponentList(@Param('component') component: string): Promise<any[]> {
    return this.componentsService.getComponentList(component);
  }
}
