/*
import {AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

/!**
 * @author abdel-maliki
 *!/


@Directive({selector: '[skViewContainer]'})
export class SkViewContainerDirective<T> implements AfterViewInit {


  constructor(private viewContainerRef: ViewContainerRef) {
  }

  @Input() set viewContainer(view: View<T>) {
    if (!view) {
      return;
    }

    this.context.$implicit = this.context.view = view;
    this.viewContainerRef.clear();

    if (view.loader) {
      this.viewContainerRef.createEmbeddedView(this.loaderTemplateRef, this.context);
    }

    if (view.error && !view.loader) {
      this.viewContainerRef.createEmbeddedView(this.errorTemplateRef, this.context);
    }

    if (view.data && !view.error) {
      this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.context);
    }
  }

  @Input() set viewContainerMain(templateRef: TemplateRef<any>) {
    this.mainTemplateRef = templateRef;
  }

  @Input() set viewContainerError(templateRef: TemplateRef<any>) {
    this.errorTemplateRef = templateRef;
  }

  @Input() set viewContainerLoading(templateRef: TemplateRef<any>) {
    this.loaderTemplateRef = templateRef;
  }


  /!** @internal *!/
  public static ngIfUseIfTypeGuard: void;

  /!**
   * Assert the correct type of the expression bound to the `ngIf` input within the template.
   *
   * The presence of this static field is a signal to the Ivy template type check compiler that
   * when the `NgIf` structural directive renders its template, the type of the expression bound
   * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
   * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
   *!/
    // tslint:disable-next-line:variable-name
  static ngTemplateGuard_ngIf: 'binding';

  private context: AppViewContext<T> = new AppViewContext<T>();
  // @ts-ignore
  private mainTemplateRef: TemplateRef<AppViewContext<T>> = null;
  // @ts-ignore
  private errorTemplateRef: TemplateRef<AppViewContext<T>> = null;
  // @ts-ignore
  private loaderTemplateRef: TemplateRef<AppViewContext<T>> = null;

  /!**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   *!/
  static ngTemplateContextGuard<T>(dir: AppViewContext<T>, ctx: any):
    ctx is AppViewContext<Exclude<T, null | undefined>> {
    return true;
  }

  ngAfterViewInit(): void {
    if (!this.errorTemplateRef) {
      throw new Error('View Pattern: Missing Error Template');
    }
    if (!this.loaderTemplateRef) {
      throw new Error('View Pattern: Missing Loader Template');
    }
    if (!this.mainTemplateRef) {
      throw new Error('View Pattern: Missing Main Template');
    }
  }
}

export class AppViewContext<T> {
  public $implicit: View<T> | undefined;
  public view: View<T> | undefined;
}

export interface AppViewOptions {
  allowMultiViews: boolean;
}

type OptionalViewData<T> = Partial<ViewData<T>>;
type OptionalViewError = Partial<ViewError>;
type OptionalViewLoader = Partial<ViewLoader>;

export class View<T> implements OptionalViewData<T>, OptionalViewError, OptionalViewLoader {
  data?: T;
  loader?: boolean;
  error?: Error;
}

export interface ViewData<T> {
  data: T;
}

export interface ViewError {
  error: Error;
}

export interface ViewLoader {
  loader: boolean;
}

*/
