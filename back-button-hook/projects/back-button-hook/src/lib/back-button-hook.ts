import { Platform } from '@ionic/angular';
import { Subscription } from "rxjs";



export const BackEventType = {
  PRE_CALLBACK_EVENT: 1,
  POST_CALLBACK_EVENT: 2
}

export class BackButtonHook {

  private MAX_PRIORITY = Number.MAX_SAFE_INTEGER - 1;
  private hookSubscription: Subscription;
  private boolHooked: Boolean = false;
  private ptrCallback: VoidFunction;
  private mutex: Boolean = false;
  private events = [];

  constructor(private platform: Platform) { }

  /**Cria um novo gancho para ser utilizado no Back-Button.
   * 
   * @param ptrFunc Função de gancho a ser utilizada sempre que o Back-Button é pressionado.
   */
  public CreateCallback(ptrFunc) {
    if (!this.boolHooked) {
      this.ptrCallback = ptrFunc;
    }
  }

  /**
   * Apaga o método definido para engate.
   */
  public DeleteCallback() {
    if (!this.boolHooked) {
      this.ptrCallback = null;
    }
  }

  /**
   * Insere o gancho de Back-Button especificado em CreateCallback.
   */
  public Hook() {
    if (!this.boolHooked) {
      this.platform.ready().then((value) => {
        let proxyCallback = () => {
          if (!this.mutex) {
            this.mutex = true;
            for (let idx = 0; idx < this.events.length; idx++) {
              if (this.events[idx].Type == BackEventType.PRE_CALLBACK_EVENT) {
                this.events[idx].Event();
              }
            }
            this.ptrCallback();
            for (let idx = 0; idx < this.events.length; idx++) {
              if (this.events[idx].Type == BackEventType.POST_CALLBACK_EVENT) {
                this.events[idx].Event();
              }
            }
            setTimeout(() => { this.mutex = false; }, 100);
          }
        }
        this.hookSubscription = this.platform.backButton.subscribeWithPriority(this.MAX_PRIORITY, proxyCallback);
      });
      this.boolHooked = true;
    }
  }

  /**
   * Remove o gancho do Back-Button, desativando sua lógica.
   */
  public Unhook() {
    if (this.boolHooked) {
      this.hookSubscription.unsubscribe();
      this.boolHooked = false;
    }
  }

  /**Registra um evento de Back-Button e retorna um identificador para ele.
   * 
   * @param ptrEvt Função ou referência à método que será utilizado como evento.
   * @param evtType Tipo de evento, consulte o objeto BackEventType.
   */
  public RegisterEvent(ptrEvt, evtType) {
    try {
      this.events.push({ Event: ptrEvt, Type: evtType });
      return this.events.length - 1;
    } catch (e) {
      return false;
    }
  }

  /**Remove um evento de Back-Button registrado anteriormente.
   * 
   * @param evtHandle Identificador do evento retornado pela função RegisterEvent().
   */
  public UnregisterEvent(evtHandle) {
    try {
      this.events.splice(evtHandle, 1);
      return true;
    } catch (e) {
      return false;
    }
  }

}