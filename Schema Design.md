1. Tables
   1. User
   2. Country
   3. Organization
   4. Group
   5. DirectMessage
   6. Participants
   7. MessageItem


Schema Design

User:
    Role: CLIENT | TEACHER | COUNTRY_MANAGER | BOARD_MEMBER
    firstName: String
    lastName: String
    Password: String
    Email: String
    OrganizationUser: ManyToMany to [Organization]
    GroupUser: ManyToMany to [Group]

Organization:
    name: String
    OrganizationUser: ManyToMany to [User]
    groupsOwned: OneToMany to [Group]

Group:
    Name: String
    GroupUsers: ManyToMany to [User]
    Organization: ManyToOne to [Organization]
    MessageQueue: OneToOne to [MessageQueue]

PrivateRoom:
    Participants: OneToMany to [Participants]
    MessageQueue: OneToOne to [MessageQueue]

Participants:
    PrivateRoom: ManyToOne to [PrivateRoom]
    User: OneToOne to [User]

MessageQueue
    OneToOne with [Group]
    OneToOne with [PrivateRoom]
    OneToMany to [MessageItem]

MessageItem
    message: String
    Sender: OneToOne to [User]

ScheduledMessageItem:
    message: String
    send_date: [Date]
    OneToOne to [MessageQueue]

Endpoints Needed:
POST - `/login`
POST - `/signup`
POST - `/create-user`
POST - `/create-group`
GET - `/students`
GET - `/student/<id>`
GET - `/organizations`

1. Country Manager Page
   1. Join/Create Multiple Organizations
2. Board Member Page
   1. Join/Create Multiple Organizations
3. Teacher Page
   1. Join *ONE* Organization
   2. Create and Join multiple groups
4. Student Page
   1. Join *ONE* Organization
   2. Create and Join multiple groups
5. EVERYONE
   1. send message immediately to group
   2. schedule message for later