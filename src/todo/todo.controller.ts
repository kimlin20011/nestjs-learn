import {
  Controller,
  Get,
  Param,
  Query,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('todos') //路由
export class TodoController {
  //: 取得路由參數
  //   @Get(':id')
  //   get(@Param() params: { id: string }) {
  //     const { id } = params;
  //     return {
  //       id,
  //       title: `Title ${id}`,
  //       description: '',
  //     };
  //   }

  //透過HttpCode回傳適當狀態碼
  @Get()
  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  get() {
    return [];
  }

  //   @Get('/examples') //子路由 GET /todos/examples：
  //   getExample() {
  //     return [
  //       {
  //         id: 1,
  //         title: 'Example 1',
  //         description: '',
  //       },
  //     ];
  //   }

  // 查詢參數 只需要在方法中添加帶有 @Query 的參數即可
  // http://localhost:3000/todos?limit=1
  //   @Get()
  //   getList(@Query('limit') limit: number = 30, @Query('skip') skip: number = 0) {
  //     const list = [
  //       {
  //         id: 1,
  //         title: 'Title 1',
  //         description: '',
  //       },
  //       {
  //         id: 2,
  //         title: 'Title 2',
  //         description: '',
  //       },
  //     ];

  //     return list.slice(skip, limit);
  //   }
}
