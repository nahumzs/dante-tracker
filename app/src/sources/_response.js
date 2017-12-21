export const __SUCCESS__ = 'success';
export const __ERROR__ = 'error';
export const __INFO__ = 'info';
export const __WARNING = 'warning';

export default (payload, type = null, message = null) => ({ payload, type, message });
