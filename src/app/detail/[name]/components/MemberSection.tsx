interface Props {
  members: Record<string, readonly string[]>;
}

export default function MemberSection({ members }: Props) {
  return (
    <section className="mt-[2.4rem] flex flex-col gap-[1.2rem]">
      {Object.entries(members).map(([role, names]) => (
        <div className="flex items-center gap-[0.4rem]" key={role}>
          <p className="title3_m_14 w-[7.8rem] text-gray-200">{role}</p>
          <ul className="flex gap-[0.8rem]">
            {names.map((member, idx) => (
              <li key={`${member}-${idx}`} className="body2_r_14 text-gray-200">
                {member}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
