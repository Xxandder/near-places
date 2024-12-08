

type Observer<T> = (data: T) => void;

class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(func: Observer<T>): void {
    this.observers.push(func);
  }

  unsubscribe(func: Observer<T>): void {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data: T): void {
    this.observers.forEach(observer => observer(data));
  }
}

export { Observable };