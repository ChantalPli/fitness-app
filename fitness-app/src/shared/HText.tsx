

type Props = {
  children: React.ReactNode
}

export default function Htext({children}: Props) {
  return (
    <h1 className="basis-3/5 font-poppins text-3xl font-bold">
      {children}
    </h1>
  )
}