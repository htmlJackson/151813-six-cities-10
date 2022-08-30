import {UserType} from '../../types/user';

type UserProps = {
  user: UserType;
  avatarSize?: number;
  addClass: string;
  type?: string;
};

const User = ({user, addClass = 'place-card', avatarSize = 74, type = 'Host'} : UserProps) => {
  const {name, avatarUrl, isPro} = user;
  return (

    <div className={`${type === 'Host' ? `${addClass}__host-user` : `${addClass}__user`} user`}>
      <div className={`${addClass}__avatar-wrapper user__avatar-wrapper${isPro ? ` ${addClass}__avatar-wrapper--pro` : ''}`}>
        <img
          className={`${addClass}__avatar user__avatar`}
          src={avatarUrl}
          width={avatarSize}
          height={avatarSize}
          alt={`${type} avatar`}
        />
      </div>
      <span className={`${addClass}__user-name`}>{name}</span>
      {isPro && <span className={`${addClass}__user-status`}>Pro</span>}
    </div>
  );
};

export default User;
