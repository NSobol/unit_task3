import fetchData from '../http';
import getLevel from '../basic';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('Тестирование вызова fetchData', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
test('', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('checking for the Err status', () => {
  fetchData.mockReturnValue({ status: 'err' });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
