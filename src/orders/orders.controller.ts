import { Controller, Delete, Get, Patch } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  fetchOrders(): [] {
    return [];
  }

  @Get(':id')
  fetchOrder(): {} {
    return {};
  }

  @Patch(':id')
  cancelOrder() {
    // cancel the order
  }

  @Patch(':id')
  updateOrder() {
    // update order
    return {};
  }

  @Delete(':id')
  deleteOrder() {
    // delete order
  }
}
