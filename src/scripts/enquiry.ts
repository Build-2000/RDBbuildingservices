// Native POST keeps FormSubmit's hosted spam check and works without JavaScript.
for (const form of document.querySelectorAll<HTMLFormElement>('form[data-enquiry-form]')) {
  const redirect=form.querySelector<HTMLInputElement>('[data-form-redirect]');
  const source=form.querySelector<HTMLInputElement>('input[name="_url"]');
  if(['http:','https:'].includes(window.location.protocol)){
    if(redirect){redirect.value=new URL('/thank-you/',window.location.origin).href;redirect.disabled=false;}
    if(source)source.value=new URL(window.location.pathname,window.location.origin).href;
  }
  let navigating=false;
  form.addEventListener('submit',event=>{
    if(navigating){event.preventDefault();return;}
    navigating=true;
    const status=form.querySelector<HTMLElement>('[role="status"]');
    if(status)status.textContent='Opening the secure submission step…';
    // Do not show a delivered message before FormSubmit has processed the request.
    for(const button of form.querySelectorAll<HTMLButtonElement>('button[type="submit"]'))button.disabled=true;
  });
  window.addEventListener('pageshow',()=>{
    navigating=false;
    for(const button of form.querySelectorAll<HTMLButtonElement>('button[type="submit"]'))button.disabled=false;
    const status=form.querySelector<HTMLElement>('[role="status"]');if(status)status.textContent='';
  });
}
