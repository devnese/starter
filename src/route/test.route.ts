import { Auth, Route, Get, Post, Put, Delete, Req, Res } from "devnese";

@Route('test')
export class TestRoute {
  @Get('/')
  index(req: Req, res: Res) {
    res.send('Hello world!')
  }

  @Post('/')
  create() {
    //TODO: method create
  }

  @Put('/:id')
  edit() {
    //TODO: method put
  }

  @Delete('/')
  delete() {
    //TODO: method delete
  }
}