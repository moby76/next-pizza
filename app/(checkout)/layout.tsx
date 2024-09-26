//оболочка-макет для всего что связанно с оформлением заказа

import { Container, Header } from '@/shared/components/shared';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Next Pizza | Корзина',
  description: 'Generated by create next app',
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Suspense>
          <Header 
          hasSearch={false} //передаем в Header параметр для отключения поиска, т.к. в слое оформления заказа нет поиска
          hasCart={false} //передаем в Header параметр для отключения корзины, т.к. в слое оформления заказа уже не должна отображаться корзина
          className="border-b-gray-200" />
        </Suspense>
        {children}
      </Container>
    </main>
  );
}
