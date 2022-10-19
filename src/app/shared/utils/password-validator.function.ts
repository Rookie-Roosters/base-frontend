export function validatePassword(value: string): string[] {
  const messages: string[] = [];
  if (!/[A-Z]/.test(value)) messages.push('Debe contener al menos una letra mayúscula');
  if (!/[a-z]/.test(value)) messages.push('Debe contener al menos una letra minúscula');
  if (!/[0-9]/.test(value)) messages.push('Debe contener al menos un número');
  if (!/[#?!@$%^&*-]/.test(value)) messages.push('Debe contener al menos un caracter especial');
  if (value.length < 8) messages.push('Debe de tener al menos 8 caracteres');
  if (value.length > 32) messages.push('Debe tener un máximo de 32 caracteres');
  return messages;
}
