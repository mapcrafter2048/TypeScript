import { bisectionMethod } from '../bisection_method'

describe('bisectionMethod', () => {
  it('should find the root of f(x) = x^2 - 3 between [1, 2]', () => {
    const result = bisectionMethod(1, 2, 0.001, (x: number) => x ** 2 - 3)
    expect(result).toBeCloseTo(1.732, 3)
  })

  it('should find the root of f(x) = x^3 - x - 2 between [1, 2]', () => {
    const result = bisectionMethod(1, 2, 0.001, (x: number) => x ** 3 - x - 2)
    expect(result).toBeCloseTo(1.521, 3)
  })

  it('should find the root of f(x) = x^2 + x - 6 between [1, 3]', () => {
    const result = bisectionMethod(1, 3, 0.001, (x: number) => x ** 2 + x - 6)
    expect(result).toBeCloseTo(2, 3)
  })

  it('should find the root of f(x) = cos(x) - x between [0, 1]', () => {
    const result = bisectionMethod(0, 1, 0.001, (x: number) => Math.cos(x) - x)
    expect(result).toBeCloseTo(0.739, 2)
  })

  it('should find the root of f(x) = e^x - 3 between [0, 2]', () => {
    const result = bisectionMethod(0, 2, 0.001, (x: number) => Math.exp(x) - 3)
    expect(result).toBeCloseTo(1.099, 2)
  })
})