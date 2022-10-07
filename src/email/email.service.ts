import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendMemberJoinVerification(email: string, signupVerifyToken: string) {
    throw new Error('Method not implemented.');
  }
}
