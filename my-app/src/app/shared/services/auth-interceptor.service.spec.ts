import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';
import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AuthInterceptorInterceptor', () => {
  let interceptor: AuthInterceptor;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthInterceptor],
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    interceptor = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization to request headers', done => {
    const mockReq = new HttpRequest('GET', '/test');
    const requestCloneSpy = spyOn(mockReq, 'clone');
    const next: any = {
      handle: () => of({ status: 'OK' }),
    };

    interceptor.intercept(mockReq, next).subscribe(() => {
      expect(requestCloneSpy).toHaveBeenCalledWith({
        headers: mockReq.headers.set('Authorization', ''),
      });
      done();
    });
  });
});
