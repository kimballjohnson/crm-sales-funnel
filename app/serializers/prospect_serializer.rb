class ProspectSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :stage, :phone, :probability
    has_one :company

end