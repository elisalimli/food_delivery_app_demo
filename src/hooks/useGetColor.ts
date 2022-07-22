import tailwindConfig from "../../tailwind.config";

// for accesing colors(for preventing the typescript errors)
export default function useGetColor(key: string) {
  // @ts-expect-error
  return tailwindConfig.theme?.extend?.colors[key] as ColorValue;
}
